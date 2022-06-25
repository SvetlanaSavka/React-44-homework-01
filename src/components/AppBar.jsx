import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";

const user = {
  isPremium: true,
  avatarUrl: "",
};

export const AppBar = () => {
  return (
    <header>
      <Logo text={user.isPremium ? "Premium" : "YouTube"} />
      <SearchBox />
      <UserMenu avatar={user.avatarUrl} />
    </header>
  );
};
