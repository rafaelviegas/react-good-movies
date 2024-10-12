import { MainMenu } from "./MainMenu";


export const Header = () => (
    <div className="header">
        <a href="#" class="logo">Good movies</a>
        <div className="header-right">
            <MainMenu/>
        </div>
    </div>
);