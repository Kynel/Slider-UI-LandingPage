import styled from '@emotion/styled';
import Select from 'react-select';
import ArrowDown from '../../assets/logo/ArrowDown';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  justify-content: center;
  display: flex;
`;

const Container = styled.div`
  @media (max-width: 576px) {
    padding: 0 15px;
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media (min-width: 576px) {
    width: 540px;
    max-width: 100%;
  }
  @media (min-width: 768px) {
    width: 720px;
    max-width: 100%;
  }
`;

const Title = styled.div`
  color: #fa4616;
  font-size: 28px;
  font-weight: 800;
`;

const SelectWrapper = styled.div`
  width: 130px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  justify-content: center;
  border-radius: 10px;
  &:hover {
    background-color: rgba(250, 70, 22, 0.2);
  }
`;

const SelectUpdateDate = styled.div`
  padding: 16px 0 16px 0;
  font-size: 18px;
`;

const LogoArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 8px;
`;

const ContentsWrapper = styled.p`
  margin-top: 30px;
  margin-bottom: 100px;
  width: 100%;
`;

const SelectDate = styled(Select)`
  box-sizing: border-box;
  .Select__control {
    margin-top: 20px;
    width: 130px;
    padding: 0;
    min-height: 24px;
    height: 60px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
      background-color: rgba(250, 70, 22, 0.2);
    }
  }
  .Select__input-container {
    padding: 0;
  }
  .Select__value-container {
    padding: 0;
    padding-left: 15px;
  }
  .Select__indicator {
    padding: 0;
  }
  .Select__indicator-separator {
    display: none;
  }
  .Select__menu {
    width: 130px;
    color: #000000;
  }
`;

export interface TermsData {
  docsData: String;
  dateOption: any;
  title: String;
  handleSelect: any;
}

const docsTemplate = (data: TermsData) => {
  return (
    <Wrapper>
      <Container>
        <Title>{data.title}</Title>
        <SelectDate
          className="basic-single"
          classNamePrefix="Select"
          options={data.dateOption}
          defaultValue={data.dateOption[data.dateOption.length - 1]}
          onChange={data.handleSelect || null}
          isSearchable={false}
        />
        <ContentsWrapper>
          {data.docsData.split('\n').map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
        </ContentsWrapper>
      </Container>
    </Wrapper>
  );
};

export default docsTemplate;
