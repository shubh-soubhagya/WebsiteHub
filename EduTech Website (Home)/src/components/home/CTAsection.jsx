


import React from 'react';
import styled from 'styled-components';
import { ArrowRight, BookOpen } from 'lucide-react';

const CtaCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="blob blob1" />
        <div className="blob blob2" />

        <div className="content">
          <h2 className="title">Start Your Journey with The Brilliant Bihar.</h2>
          <p className="description">
            Unlock your potential with our expert-led courses. Join thousands of students on a transformative learning adventure.
          </p>
          <div className="buttons">
            <a href="#" className="button primary">
              Register Now <ArrowRight size={16} />
            </a>
            <a href="#" className="button secondary">
              Explore Courses <BookOpen size={16} />
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 0rem 0rem;
  background-color: #f0f4f8;
  font-family: 'Inter', sans-serif;

  .card {
    position: relative;
    width: 90%;
    max-width: max-full;
    height: 350px;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
  }

  .content {
    position: relative;
    z-index: 10;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: #334155;
    transform: translateZ(50px);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
    color: #1e293b;
    text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    animation: fadeInUp 0.5s ease-out forwards;
  }

  .description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #475569;
    max-width: 750px;
    opacity: 0;
    animation: fadeInUp 0.5s ease-out 0.2s forwards;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    opacity: 0;
    animation: fadeInUp 0.5s ease-out 0.4s forwards;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 12px;
    padding: 12px 24px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }

  .button.primary {
    background-color: #3b82f6;
    color: white;
  }

  .button.primary:hover {
    background-color: #60a5fa;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
  }

  .button.secondary {
    background-color: #60a5fa;
    transform: translateY(-2px);
    border: 1px solid #93c5fd;
  }

  .button.secondary:hover {
    background-color: rgba(59, 130, 246, 0.1);
    transform: translateY(-2px);
  }

  .blob {
    position: absolute;
    z-index: 1;
    filter: blur(50px);
    opacity: 0.6;
  }

  .blob1 {
    width: 400px;
    height: 400px;
    background: #3b82f6;
    animation: blob-animate-1 12s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55);
  }

  .blob2 {
    width: 300px;
    height: 300px;
    background: #8b5cf6;
    animation: blob-animate-2 10s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55) 2s;
  }

  @keyframes blob-animate-1 {
    0% { transform: translate(-50%, -50%) scale(1); border-radius: 50%; }
    25% { transform: translate(-10%, -60%) scale(1.1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { transform: translate(30%, -20%) scale(0.9); border-radius: 30% 70% 60% 40% / 40% 60% 30% 70%; }
    75% { transform: translate(-40%, 40%) scale(1.2); border-radius: 70% 30% 40% 60% / 30% 70% 60% 40%; }
    100% { transform: translate(-50%, -50%) scale(1); border-radius: 50%; }
  }

  @keyframes blob-animate-2 {
    0% { transform: translate(50%, 50%) scale(1); border-radius: 50%; }
    25% { transform: translate(10%, -20%) scale(0.9); border-radius: 40% 60% 70% 30% / 70% 40% 30% 60%; }
    50% { transform: translate(-60%, -40%) scale(1.1); border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    75% { transform: translate(30%, 60%) scale(0.8); border-radius: 30% 70% 60% 40% / 40% 60% 30% 70%; }
    100% { transform: translate(50%, 50%) scale(1); border-radius: 50%; }
  }

  @media (max-width: 768px) {
    .card {
      height: auto;
      padding: 2.5rem 1.5rem;
      max-width: 100%;
    }
    .title { font-size: 2rem; }
    .description { font-size: 1rem; }
    .buttons {
      flex-direction: column;
      width: 100%;
      gap: 0.75rem;
    }
  }
`;

export default CtaCard;

