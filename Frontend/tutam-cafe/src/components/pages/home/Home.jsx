import UserRewards from './UserRewards'
import RewardsBanner from './RewardsBanner';
import MenuCategories from './MenuCategories'
import Suggestions from './Suggestions';
import Favourites from './Favourites';
import Discover from './Discover';

function Home() {
  const isUserLoggedIn = false; // This should be replaced with actual logic to determine if the user has logged in or not;
  const isFavouritesExists = true; // This should be replaced with actual logic to determine if the user has favourites or not;

  return (
    <>
      {isUserLoggedIn ? <UserRewards /> : <RewardsBanner />}
      <MenuCategories />
      <Suggestions />
      {isFavouritesExists && isUserLoggedIn ? <Favourites /> : null}
      <Discover />
      <div className='pb-25'></div> {/* add this to footer after completing all the pages */}
    </>
  )
}

export default Home