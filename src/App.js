import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize : "64px" }}>
          <strong>Welcome To My Website</strong>
        </p>
      </header>
      <div className='brief-self-intro'>
        <img src='images/squid.jpeg' alt='myself' className='my-avatar'/>
        <div className='profile'>
          <p>
            <strong style={{ fontSize : "26px", margin : "8px" }}>Yuusuke Gounaka</strong>
          </p>
          <p>
            M1
          </p>
        </div>
      </div>
      <div className='body'>
        <div className='section overview'>
          <h2 className='subtitle'>
            Overview
          </h2>
          <div className='description'>
            <p>
              Web技術に関して勉強しています。主にバックエンドに関する学習をしています。フロントエンドは少しだけ...
            </p>
            <p>
              所属するプログラミング学習コミュニティにおいてチーム開発（求人情報のスクレイピング）を行っています。
            </p>
            <p>
              大学では複素ニューラルネットワークに関する研究を行っています。
            </p>
            <p>
              現在は特に<strong>Linux</strong>と<strong>英語</strong>に関して学習をしています。
            </p>
          </div>
        </div>
        <div className='section links'>
          <h2 className='subtitle'>
              Links
          </h2>
          <div>
            <a href='https://github.com/usuke1115' target='_blank' rel="noopener noreferrer">
              <img src='./images/github-icon.png' alt='GitHub' className='image'/>
            </a>
            <a href='https://qiita.com/usuke1115' target='_blank' rel="noopener noreferrer">
              <img src='./images/qiita-icon.png' alt='Qiita' className='image'/>
            </a>
            <a href='https://zenn.dev/yusuke1115' target='_blank' rel="noopener noreferrer">
              <img src='./images/zenn-icon.svg' alt='Zenn' className='image'/>
            </a>
            <a href='https://x.com/emperor_3aka' target='_blank' rel="noopener noreferrer">
              <img src='./images/x-icon.png' alt='X' className='image'/>
            </a>
          </div>
        </div>
        <div className='section skills'>
          <h2 className='subtitle'>
            Skills
          </h2>
          <h3>
            Languages
          </h3>
          <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=html,css,js,py" alt='skillicons'/>
              </a>
          </p>
          <h3>
            Frameworks and Libraries
          </h3>
          <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=express,flask,tensorflow,react" alt='skillicons'/>
              </a>
          </p>
          <h3>
            DB and Dev Tools etc
          </h3>
          <p align="center">
              <a href="https://skillicons.dev">
                <img src="https://skillicons.dev/icons?i=docker,git,github,vscode" alt='skillicons'/>
              </a>
          </p>
        </div>
        {/* <div className='section activities'>
          <h2 className='subtitle'>
            Activities
          </h2>
        </div> */}
      </div>
      <footer className='App-footer'>
        <p>
          &copy; 2024 Yusuke Gounaka
        </p>
      </footer>
    </div>
  );
}

export default App;
