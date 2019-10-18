import {BehaviorSubject} from 'rxjs';


class LoggedIN{
public isloggedin: any;
constructor(){
    this.isloggedin =  new BehaviorSubject(false);
}

}
export const isloginObject = new LoggedIN();

