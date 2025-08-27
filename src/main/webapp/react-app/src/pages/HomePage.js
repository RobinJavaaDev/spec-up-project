import React from 'react';

import styled from 'styled-components';

import Hero from '../components/Hero';
import NavTabs from '../components/NavTabs';
import PostCard from '../components/PostCard';
import ProductCard from '../components/ProductCard';
import QuickMenu from '../components/QuickMenu';
import RestaurantCard from '../components/RestaurantCard';
import Sidebar from '../components/Sidebar';

const Page = styled.div``;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: #fff;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  margin-top: 16px;
`;

const SectionHeader = styled.div`
  padding: 16px 18px;
  border-bottom: 1px solid #eef2f6;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 800;
  color: #172b4d;
`;

const SectionBody = styled.div`
  padding: 16px 18px;
`;

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RightSidebar = styled(Sidebar)`
  @media (max-width: 992px) { display: none; }
`;

const HomePage = () => {
  const recommendedProducts = [
    { id: 1, name: '빨간 마이크', price: '50,000원' },
    { id: 2, name: '스타벅스 기프트카드', price: '30,000원' },
    { id: 3, name: '화장품 세트', price: '80,000원' },
    { id: 4, name: '운동화', price: '120,000원' },
    { id: 5, name: '에어팟', price: '150,000원' },
    { id: 6, name: '빨간 마이크', price: '50,000원' },
    { id: 7, name: '스타벅스 기프트카드', price: '30,000원' },
    { id: 8, name: '화장품 세트', price: '80,000원' },
    { id: 9, name: '운동화', price: '120,000원' },
    { id: 10, name: '에어팟', price: '150,000원' },
  ];

  const popularPosts = [
    { id: 1, title: '다양한 교육자료 무료 나눔', author: '김교육', content: '초등학생용 학습자료 나눔합니다.' , likes: 15 },
    { id: 2, title: '성수동 신규 카페 오픈 정보', author: '이동네', content: '분위기 좋은 카페 생겼어요.' , likes: 8 },
  ];

  const restaurants = [
    { id: 1, name: '성수동 맛집', location: '성수동', description: '맛있는 한식집입니다', rating: 4.5 },
    { id: 2, name: '전주 맛집', location: '전주', description: '전주 비빔밥 맛집', rating: 4.8 },
  ];

  return (
    <Page>
      <Hero />
      <NavTabs />
      <Container>
        <Grid>
          <div>
            <Section>
              <SectionHeader>📦 우리 동네 추천 상품</SectionHeader>
              <SectionBody>
                <Products>
                  {recommendedProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </Products>
              </SectionBody>
            </Section>

            <Section>
              <SectionHeader>🔥 우리 동네 인기글</SectionHeader>
              <SectionBody>
                <Posts>
                  {popularPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </Posts>
              </SectionBody>
            </Section>

            <Section>
              <SectionHeader>🍽️ 우리 동네 맛집</SectionHeader>
              <SectionBody>
                <Posts>
                  {restaurants.map((r) => (
                    <RestaurantCard key={r.id} restaurant={r} />
                  ))}
                </Posts>
              </SectionBody>
            </Section>
          </div>

          <RightSidebar />
        </Grid>
      </Container>
      <QuickMenu />
    </Page>
  );
};

export default HomePage;
