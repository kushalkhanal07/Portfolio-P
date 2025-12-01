import Image from 'next/image';


import styles from '@/styles/GithubPage.module.css';



const GithubPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
       <div className={styles.Profile}>
          <Image src={"/Kushal.jpeg"} width={60} height={60} alt='photo' />
          <p>Kushal Khanal</p>
       </div>
       <span className={styles.spanTitle}></span>
       <p>60 repository</p>
       <span className={styles.spanTitle}></span>
       <p>70 Followers</p>
      </div>

      <div className={styles.githubPage}>
          <div className={styles.repo}>
            <Image className={styles.image} src={"/github.png"} width={200} height={20} alt='repo' />
          </div>
          <h3 className={styles.sectionTitle}>502 contributions in the last year</h3>
        
      </div>
    </div>
  );
};

// export async function getStaticProps() {
//   const userRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
//   );
//   const user = await userRes.json();

//   const repoRes = await fetch(
//     `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?sort=pushed&per_page=6`
//   );
//   const repos = await repoRes.json();

//   return {
//     props: { title: 'GitHub', repos, user },
//     revalidate: 600,
//   };
// }

export default GithubPage;
