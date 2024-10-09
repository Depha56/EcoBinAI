// src/components/Settings.js
import React, { useState } from 'react';
import '../../../styles/Settings.css';

const Settings = () => {
    // State for general settings
    const [appName, setAppName] = useState('Ecobin AI');
    const [themeColor, setThemeColor] = useState('#3498db'); // Default color
    const [language, setLanguage] = useState('English');

    // State for profile settings
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // State for notification settings
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const handleGeneralSettingsSubmit = (e) => {
        e.preventDefault();
        console.log('General Settings saved:', {
            appName,
            themeColor,
            language,
        });
    };

    const handleProfileSettingsSubmit = (e) => {
        e.preventDefault();
        console.log('Profile Settings saved:', {
            username,
            email,
        });
    };

    const handleNotificationSettingsSubmit = (e) => {
        e.preventDefault();
        console.log('Notification Settings saved:', {
            emailNotifications,
            smsNotifications,
        });
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>

            {/* General Settings Section */}
            <section className="settings-section">
                <h2>General Settings</h2>
                <form onSubmit={handleGeneralSettingsSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="appName">Application Name:</label>
                        <input
                            type="text"
                            id="appName"
                            value={appName}
                            onChange={(e) => setAppName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="themeColor">Theme Color:</label>
                        <input
                            type="color"
                            id="themeColor"
                            value={themeColor}
                            onChange={(e) => setThemeColor(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="language">Language:</label>
                        <select
                            id="language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="English">English</option>
                            <option value="Kinyarwanda">Kinyarwanda</option>
                            <option value="French">French</option>
                        </select>
                    </div>
                    <button type="submit" className="save-button">Save General Settings</button>
                </form>
            </section>

            {/* Profile Settings Section */}
            <section className="settings-section">
                <h2>Profile Settings</h2>
                <form onSubmit={handleProfileSettingsSubmit} className="settings-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="save-button">Save Profile Settings</button>
                </form>
            </section>

            {/* Notification Settings Section */}
            <section className="settings-section">
                <h2>Notification Settings</h2>
                <form onSubmit={handleNotificationSettingsSubmit} className="settings-form">
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) => setEmailNotifications(e.target.checked)}
                            />
                            Email Notifications
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                type="checkbox"
                                checked={smsNotifications}
                                onChange={(e) => setSmsNotifications(e.target.checked)}
                            />
                            SMS Notifications
                        </label>
                    </div>
                    <button type="submit" className="save-button">Save Notification Settings</button>
                </form>
            </section>
        </div>
    );
};

export default Settings;
