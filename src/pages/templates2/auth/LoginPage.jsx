import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';

const MOCK_USER = {
    email: 'test@test.com',
    password: '1234',
    name: '테스트유저',
};

const LoginPage = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated, setUser } = useAuthStore();

    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            setError('이메일과 비밀번호를 입력해주세요.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const found = [MOCK_USER, ...users].find(u => u.email === form.email && u.password === form.password);

        if (found) {
            setUser({ email: found.email, name: found.name, nickname: found.nickname });
            setIsAuthenticated(true);
            navigate('/log/write');
        } else {
            setError('이메일 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div>
            <h1>로그인</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>이메일</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="이메일을 입력해주세요"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="비밀번호를 입력해주세요"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>

                {error && <p>{error}</p>}

                <button type="submit">로그인</button>
            </form>

            <p>
                계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </p>
        </div>
    );
};

export default LoginPage;
