import React from "react";
import styles from "./profile.module.css"; // Importing CSS Module

const ProfilePage = () => {
  return (
    <div className={styles.profileContainer}>
      {/* Profile Picture */}
      <div className={styles.profileImage}>
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>

      {/* Profile Info */}
      <h1 className={styles.profileName}>Someone Name</h1>
      <p className={styles.profileBio}>
        Web Developer | Passionate about React & Next.js | Always Learning 🚀
      </p>

      {/* Social Links */}
      <div className={styles.socialLinks}>
        <a
          href="https://github.com"
          target="_blank"
          className={styles.socialIcon}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className={styles.socialIcon}
        >
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className={styles.socialIcon}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      {/* Edit Profile Button */}
      <button className={styles.editButton}>Edit Profile</button>
    </div>
  );
};

export default ProfilePage;
