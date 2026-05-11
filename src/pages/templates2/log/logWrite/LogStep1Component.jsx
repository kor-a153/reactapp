import { useNavigate } from 'react-router-dom';

const LogStep1Component = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <button>토글</button>
            </div>
            <div>
                <button onClick={() => navigate('/log/write/step2')}>다음</button>
            </div>
            <div>
                <p>로그 제목</p>
                <input type="text" placeholder='예)정보처리기사 자격증 필기도전' />
            </div>
            <div>
                <p>이루고 싶은 비전</p>
                <input type="text" placeholder="예)자격증 실기 합격" />
            </div>
        </div>
    );
};

export default LogStep1Component;
