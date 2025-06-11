import { useEffect, useState } from 'react';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function UserRewardsBanner() {
  const [rewardsData, setRewardsData] = useState(null);

  useEffect(() => {
    fetch('/api/user-rewards') // Update this endpoint as per your backend
      .then(res => res.json())
      .then(data => setRewardsData(data))
      .catch(err => console.error('Failed to fetch rewards data', err));
  }, []);

  if (!rewardsData) return null; // Or loading spinner

  return (
    <a href="/Rewards">
      <div className="bg-[var(--color-primary)] text-[var(--color-background)] w-full">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20">
          <div className="flex flex-row justify-between items-center h-full">

            <h2>
              Hello <strong>{rewardsData.userName}</strong>, you're in <strong>{rewardsData.level}</strong> Tier Rewards Program
            </h2>

            <div className="flex flex-row justify-between items-center gap-2">
              <AutoAwesomeIcon className="text-[var(--color-gold)]" />
              <p className="text-extrabold text-2xl"><strong>{rewardsData.points}</strong>/5 points</p>
            </div>

            <div className="flex flex-row justify-between items-center gap-2">
              <EmojiEventsIcon className="text-[var(--color-gold)]" />
              <p className="text-extrabold text-2xl"><strong>{rewardsData.rewards}</strong>rewards</p>
            </div>

            <div className="outline-solid rounded-full px-2 py-1">
              <p>Know More</p>
            </div>

          </div>
        </div>
      </div>
    </a>
  );
}

export default UserRewardsBanner;
