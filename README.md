# 폴더구조

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜index.js
 ┣ 📂assets
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜theme.js
 ┣ 📂components
 ┃ ┣ 📜CarList.js
 ┃ ┣ 📜CarListItem.js
 ┃ ┣ 📜ItemDesc.js
 ┃ ┣ 📜SegmentType.js
 ┃ ┣ 📜SegmentTypeList.js
 ┃ ┗ 📜index.js
 ┣ 📂data
 ┃ ┗ 📜index.js
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📜Detail.js
 ┃ ┣ 📜Main.js
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┣ 📜App.js
 ┣ 📜config.js
 ┗ 📜index.js
```

# 자주 쓰는 공동 테마 customizing

```javascript
//theme.js
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const fontSizes = {
  title: "17px",
  subtitle: "14px",
  paragraph: "12px",
  detailTitle: "24px",
  detailSubtitle: "20px",
};

const colors = {
  black: "#000000",
  grey: "#D9D9D9",
  white: "#ffffff",
  skyblue: "#0094FF",
};

const theme = {
  common,
  fontSizes,
  colors,
};

export default theme;
```

### 활용 예시
```javascript
const Header = styled.div`
  ${({ theme }) => theme.common.flexCenter};
  justify-content: center;
  width: 390px;
  padding: 20px 0;
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  border-bottom: 1px solid black;
`;
```

<br />

# type에 따른 한글 mapping
```
fuelType: "gasoline" | "hybrid" | "ev"
segment: "C" | "D" | "E" | "SUV"
```

```javascript
const segmentMap = {
    C: "소형",
    D: "중형",
    E: "대형",
    SUV: "SUV",
  };

  const executeSegment = segmentType => {
    return segmentMap[segmentType];
  };

  const fuelMap = {
    gasoline: "가솔린",
    ev: "전기",
    hybrid: "하이브리드",
  };

  const executeFuel = fuelType => {
    return fuelMap[fuelType];
  };
```
### 활용 예시
```javascript
//CarListItem.js
  ...
  <ItemType>
      {executeSegment(segment)} / {executeFuel(fuelType)}
  </ItemType>
```
