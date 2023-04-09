export function manageFriends(state, action) {
  // your code here
  switch(action.type){
    case "friends/add":
      return {friends : [...state.friend, action.payload] }
    case "friends/remove":
      return {
        friends: state.friends.filter((friend)=> friend.id != action.payload) };
      default:
        return state;
  }
}
