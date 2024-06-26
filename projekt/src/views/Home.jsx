import React from 'react';

const Home = () => {
    return (
        <div style={styles.homeContainer}>
            <div style={styles.homeContent}>
                <h1 style={styles.title}>Welcome to My Store</h1>
                <p style={styles.subtitle}>Your one-stop shop for fresh produce and more.</p>
            </div>
        </div>
    );
}

const styles = {
    homeContainer: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
    },
    homeContent: {
        backgroundColor: '#007bff',
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        color: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '3rem',
        marginBottom: '20px',
    },
    subtitle: {
        fontSize: '1.5rem',
    },
};

export default Home;
