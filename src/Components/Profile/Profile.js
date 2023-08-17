import styles from  './Profile.module.css';

export default function Profile() {
    return (

        <div className={styles.profileContainer}>
            <div className="profile-list">
               <ul>
                    <li className={styles.active}>Edit Profile</li>
                    <li>My Courses</li>
                    <li>Account Security</li>
                    <li>Privacy</li>
                    <li>Delete Account</li>
               </ul>
            </div>

            <div className={styles.profileInfo}>
                <h2 className={styles.profileHeading}>Your Account</h2>
                <p className={styles.profileParagraph}>Personal Information</p>

                <div className={styles.profileImage}>
                   <img src="./userImage.png" alt="user"/>
                   <div className={styles.buttons}>
                     <button className={styles.active}>Replace</button>
                     <button>Delete Image profile</button>
                   </div>
                </div>

                <div className={styles.profileInputs}>
                   <div className={styles.inputsContainer}> 
                      <div className={styles.inputContent}>
                         <label htmlFor='username'>User Name*</label><br/>
                         <input type='text' id='username' placeholder='Username' required/>
                      </div>

                        <div className={styles.inputContent}>
                            <label htmlFor='email'>Email*</label><br />
                            <input type='email' id='email' placeholder='Email' required/>
                        </div>
                   </div>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputContent}>
                            <label htmlFor='firstname'>First Name*</label><br />
                            <input type='text' id='firstname' placeholder='First Name' required/>
                        </div>

                        <div className={styles.inputContent}>
                            <label htmlFor='lastname'>Last Name*</label><br />
                            <input type='text' id='lastname' placeholder='Last Name' required/>
                        </div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputContent}>
                            <label htmlFor='date'>Date Of Birth*</label><br />
                            <input type='date' id='date' placeholder='DateofBirth' required/>
                        </div>

                        <div className={styles.inputContent}>
                            <label htmlFor='number'>Phone Number*</label><br />
                            <input type='number' id='number' placeholder='Phone Number' required/>
                        </div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputContent}>
                            <label htmlFor='location'>Location*</label><br />
                            <input type='text' id='location' placeholder='Country' required/>
                        </div>

                        <div className={styles.inputContent}>
                            <label>Gender</label><br />
                            <div className={styles.radioInputsContainer}>
                                <div> <input type='radio' name='gender' id="male" checked/><label htmlFor='male'>Male</label></div>
                                <div> <input type='radio' name='gender' id="female" /><label htmlFor='female'>Female</label></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.textarea}>
                        <label htmlFor='message'>Tell us something about you</label><br />
                        <textarea rows="5" c placeholder='Tell us something about you' id='message'></textarea>
                    </div>
                </div>

                <div className={styles.saveButtons}>
                    <button className={styles.active}>Save Changes</button>
                    <button>Cancel</button>
                </div>
            </div>

        </div>
    )
}