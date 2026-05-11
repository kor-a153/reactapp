import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import IntroCaseCardList from './IntroCaseCardList';

const IntroPreviewContainer = () => {

    return (
        <section>
            <Link to="/case/1">로그사례 1</Link>
            <Link to="/case/2">로그사례 2</Link>
            <Link to="/case/3">로그사례 3</Link>
        </section>
    );
};

export default IntroPreviewContainer;