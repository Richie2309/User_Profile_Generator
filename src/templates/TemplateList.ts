import axios from "axios";
import UserProfileData from "../model/UserDataInterface";

interface DomProfile {
    getData(): void
}

export default class UserProfile implements DomProfile {
    private readonly _avatarImg: HTMLImageElement;
    private readonly _userNameH: HTMLHeadElement;
    private readonly _emailP: HTMLParagraphElement;
    private readonly _uidSpan: HTMLSpanElement;
    private readonly _genderSpan: HTMLSpanElement;
    private readonly _dobSpan: HTMLSpanElement;
    private readonly _titleSpan: HTMLSpanElement;
    private readonly _keySkillSpan: HTMLSpanElement;

    static instance: UserProfile = new UserProfile()

    private constructor() {
        this._avatarImg = document.getElementById('avatar') as HTMLImageElement
        this._userNameH = document.getElementById('username') as HTMLHeadElement
        this._emailP = document.getElementById('email') as HTMLParagraphElement
        this._uidSpan = document.getElementById('uid') as HTMLSpanElement
        this._genderSpan = document.getElementById('gender') as HTMLSpanElement
        this._dobSpan = document.getElementById('DOB') as HTMLSpanElement
        this._titleSpan = document.getElementById('title') as HTMLSpanElement
        this._keySkillSpan = document.getElementById('keySkill') as HTMLSpanElement
    }

    async getData(): Promise<void> {
        try {
            const response: UserProfileData = (await axios.get('https://random-data-api.com/api/v2/users')).data
            console.log(response);
            
            this.render(response)
        } catch (error) {
            throw error
        }
    }

    private render(data: UserProfileData): void {
        this._avatarImg.src = data.avatar;
        this._userNameH.textContent = data.username;
        this._emailP.textContent = data.email;
        this._uidSpan.textContent = data.id;
        this._genderSpan.textContent = data.gender;
        this._dobSpan.textContent = data.date_of_birth;
        this._titleSpan.textContent = data.employment.title;
        this._keySkillSpan.textContent = data.employment.key_skill;
    }
}