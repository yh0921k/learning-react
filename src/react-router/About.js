import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
  });

  const showDetail = query.detail === 'true'; // 쿼리의 파싱 결과 같은 문자열이다.
  return (
    <div>
      <h1>About</h1>
      <p>This project is designed to learn react router basic</p>
      {showDetail && <p>detail : true</p>}
    </div>
  );
};

export default About;
