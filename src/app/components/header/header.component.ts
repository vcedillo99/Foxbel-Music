import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/oauth/authentication.service';
import { TokenService } from 'src/app/services/token/token.service';
import { TrackService } from 'src/app/services/track/track.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private url_login: string = 'https://connect.deezer.com/oauth/auth.php?app_id=584724&redirect_uri=http://localhost:4200/home'
  private code: string | null = null;
  delayInput: any

  constructor(
    private activatedRoute: ActivatedRoute, 
    private auth: AuthenticationService, 
    private tokenService: TokenService,
    private userService: UserService,
    private trackService: TrackService
  ) {}

  text_search: string = ''

  login() {
    window.open(this.url_login, '_blank');
  }

  obtenerToken() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.code = params.get('code')
    })

    this.auth.getToken(this.code).subscribe(res => {
      console.log(res);
      let data: any = res
      this.tokenService.setToken(data.access_token)
      this.tokenService.setExpires(data.expires)
    })

    this.trackService.getTrack(3135556).subscribe(res => {
      console.log(res);
    })

    this.userService.getUserInfo().subscribe(res => {
      console.log(res);
    })
  }

  searchSongs() {
    clearTimeout(this.delayInput);
    this.delayInput = setTimeout(() => {
      if (this.text_search) {
        this.trackService.search_text$.next(this.text_search)
      }
    }, 1000);
  }

}
