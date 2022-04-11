import React from "react";

const DevCarrot = () => {
  return (
    <div className="devcarrot__container">
      <div className="devcarrot__header">
        <h1>devCarrot</h1>
        <h3>"배움이 있는 곳을 찾아 다닙니다."</h3>
      </div>
      <div className="devcarrot__info">
        <ul>
          <li>
            name: <span>'ByungHoon Jeong',</span>
          </li>
          <li>
            phone: <span>'010-9556-5432',</span>
          </li>
          <li>
            email: <span>'stylenbs@gmail.com',</span>
          </li>
          <li>
            github:{" "}
            <span style={{ color: "#04aaff" }}>
              <a href="https://github.com/yourcarrot0214" target="blank">
                '@yourcarrot0214',
              </a>
            </span>
          </li>
          <li>
            resume:{" "}
            <span style={{ color: "#04aaff" }}>
              <a
                href="https://www.notion.so/devCarrot-770adfda777640ca8e463f34c132fe3f"
                target="blank"
              >
                'notion@devCarrot',
              </a>
            </span>
          </li>
        </ul>
      </div>
      <br />
      <div className="devcarrot__header">
        <h1>skills</h1>
        <h3>"Front-end 개발자로 성장중입니다."</h3>
      </div>
      <div className="devcarrot__info">
        <ul>
          <li>
            Language: <span>JavaScript</span>
          </li>
          <li>
            Library: <span>React</span>
          </li>
          <li>
            Experience: <span>Node, express, MongoDB, Firebase</span>
          </li>
        </ul>
      </div>
      <br />
      <div className="devcarrot__header">
        <h1>Service Info</h1>
        <h3>"폐쇄적인 SNS를 구현하고 싶었습니다."</h3>
      </div>
      <div className="devcarrot__info">
        <ul>
          <li>
            <a
              href="https://github.com/yourcarrot0214/carrotfield"
              target="blank"
            >
              코드보러가기
            </a>
          </li>
        </ul>
        <p>
          Twitter의 tweet 기능을 일부 클론 했습니다. 결과적으로 CRUD 기능을 갖춘
          게시판 형태가 되었습니다.
        </p>
        <p>
          클론을 통해 싸이월드 방명록 기능을 구현하고자 했습니다. 공개적인
          SNS에서 하기 힘든 말들(오래된 안부, 비밀스런 얘기들)을 할 수 있는
          채널이 있었으면 했습니다.
        </p>
        <p>
          첫 공개 서비스를 해보면서 '사용자의 행동을 내 생각대로 유도하는 것이
          쉽지 않다.'라는것을 가장 크게 느꼈습니다. 행동 패턴을 분석하고
          사용자의 요구사항을 함께 반영하여 서비스를 구현하는 개발자가
          되겠습니다.
        </p>
      </div>
    </div>
  );
};

export default DevCarrot;

/*
    const devCarrot = {
        name: 'ByungHoon Jeong',
        born: '1987.02.14',
        email: 'stylenbs@gmail.com',
        phone: '010-9556-5432',
        github: "https://github.com/yourcarrot0214",
        notion: "https://www.notion.so/devCarrot-770adfda777640ca8e463f34c132fe3f",
        skills: {
            language: 'JavaScript',
            library: 'React',
            Experience: ['Node.js', 'express', 'MongoDB', 'Firebase']
        }
    }
*/
