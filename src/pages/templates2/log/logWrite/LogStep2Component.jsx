import { useNavigate } from 'react-router-dom';

const LogStep2Component = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <button>이전</button>
            </div>
            <div>
                <button>추가</button>
            </div>
            <div>
                <p>주요결정내용</p>
                <input type="text" placeholder='예) 기본기 대신 기출문제 암기에만 집중하기로 결정했다.' />
            </div>
            <div>
                <p>결정 - 내부 요인</p>
                <input type="text" placeholder="예) 그 결정을 했을 때, 내부요인은 무엇이 있었나요? (심리상태, 건강, 자기 인식 등)" />
            </div>
            <div>
                <p>결정 - 외부 요인</p>
                <input type="text" placeholder="예) 외부 요인 중 통제 범위를 벗어난 제약이나 예상 못한 변수는 무엇이 있었나요?" />
            </div>
            <div>
                <button>임시저장</button>
            </div>
            <div>
                <button onClick={() => navigate('/log/write/result')}>분석하기</button>
            </div>
        </div>
    );
};

export default LogStep2Component;
