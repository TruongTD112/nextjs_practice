'use client';

import styles from "./page.module.css";

const HomePage = () => {
    return (
        <div>
            <div className={styles.search}>
                <div className={styles.logo_text}>
                    FoodShare
                </div>
                <div className={styles.searchBar}>
                    <i className={`fi fi-rr-search ${styles.searchIcon}`} aria-hidden></i>
                    <input
                        className={styles.searchInput}
                        placeholder={"Tìm kiếm cửa hàng/món ăn"}
                        // readOnly={!active}
                        // value={value}
                        onChange={(e) => (e.target.value)}
                        // onKeyDown={active ? (e) => { if (e.key === "Enter") onSubmit?.(); } : undefined}
                        // autoFocus={active ? autoFocus : false}
                        aria-label="Ô tìm kiếm"
                    />
                </div>
            </div>

            <div className={styles.main}></div>

            <div className={styles.floatMenu}></div>
        </div>
    );
}

export default HomePage;