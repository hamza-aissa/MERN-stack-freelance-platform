import React, { useState, useEffect } from "react";
import { useFollowUserMutation, useGetFollowingStatusQuery } from "./userSlice";

const FollowUserButton = ({ userID, authUserId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [Follow, { data, isLoading, isError, error }] = useFollowUserMutation();

  const { data: followingStatusData } = useGetFollowingStatusQuery({
    userId: authUserId,
    targetId: userID,
  });

  useEffect(() => {
    if (followingStatusData) {
      setIsFollowing(followingStatusData.isFollowing);
    }
  }, [followingStatusData]);

  const handleFollow = async () => {
    try {
      const result = await Follow({ TargetId: userID }).unwrap();
      setIsFollowing(true);
    } catch (error) {
      if (error.data?.message === "You are already following this user") {
        setIsFollowing(true);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div
      onClick={handleFollow}
      className="border-2 border-primary bg-primary/40 rounded-xl px-2 py-1 text-white"
    >
      {isFollowing ? "Following" : "Follow"},
    </div>
  );
};

export default FollowUserButton;
