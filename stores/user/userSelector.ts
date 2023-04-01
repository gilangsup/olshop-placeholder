import type { RootState } from "stores/rootReducers";

export const getCurrentUserData = ({ user }: RootState) => {
    return user.currentUser;
};
