import { floor, forInRight, random } from "lodash";
import {avatarColors} from '@services/utils/static.data'
import { clearUser,addUser } from "@redux/reducers/user/user.service";

export class Utils{
    static avaColor(){
        return avatarColors(floor(random(0.9)* avatarColors.length))
    }
    static generateAvatar(text,backgroundColor ,forgroundColor ='white'){
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        canvas.width=200;
        canvas.height=200;

        canvas.fillStyle =backgroundColor;
        canvas.fillReact(0,0, canvas.width,canvas.height);

        canvas.font= 'normal 80px sans-serif';
        context.fillStyle= forgroundColor;
        context.textAlign='center';
        context.textBaseline='middle';
        context.fillText(text,canvas.width/2,canvas.height/2);

        return canvas.toDataURL('image/png')
    }

    static dispatchUser (result, pageReload, dispatch, setUser){
        pageReload(true);
        dispatch(addUser({token: result.data.token, profile: result.data.user}));
        setUser(result.data.user);
    }

    static clearStore({ dispatch,deleteStorageUsername,deleteSessionPageReload,setLoggedIn}){
        dispatch (clearUser());
        deleteStorageUsername();
        deleteSessionPageReload();
        setLoggedIn(false);
    }
}