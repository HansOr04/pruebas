import React from "react";

interface ProfilePicProps {
  src?: string;
  alt: string;
  userName: string;
  size?: string;
}

const ProfilePic: React.FC<ProfilePicProps> = ({
  src,
  alt,
  userName,
  size = "w-10 h-10",
}) => {
  return (
    <div
      className={`${size} bg-gray-200 rounded-full flex items-center justify-center overflow-hidden`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="text-gray-600 font-medium">{userName.charAt(0)}</span>
      )}
    </div>
  );
};

export default ProfilePic;
