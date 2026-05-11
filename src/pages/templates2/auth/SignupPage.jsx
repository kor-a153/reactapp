import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.nickname || !form.email || !form.password || !form.confirmPassword) {
            setError('모든 항목을 입력해주세요.');
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const exists = users.find(u => u.email === form.email);
        if (exists) {
            setError('이미 사용 중인 이메일입니다.');
            return;
        }
        users.push({ name: form.name, nickname: form.nickname, email: form.email, password: form.password });
        localStorage.setItem('users', JSON.stringify(users));
        navigate('/login');
    };

    return (
        <div>
            <h1>회원가입</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>이름</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름을 입력해주세요"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>닉네임</label>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="닉네임을 입력해주세요"
                        value={form.nickname}
                        onChange={handleChange}
                    />
                </div>

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

                <div>
                    <label>비밀번호 확인</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="비밀번호를 다시 입력해주세요"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                </div>

                {error && <p>{error}</p>}

                <button type="submit">회원가입</button>
            </form>

            <p>이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
        </div>
    );
};

export default SignupPage;
