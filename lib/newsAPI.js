// 모든 뉴스 데이터를 반환하는 함수
export async function getAllNewsAPI() {
  try {
    const response = await fetch("http://localhost:8080/news");
    if (!response.ok) {
      throw new Error("데이터를 가져오는데 실패 했습니다.");
    }

    return await response.json();
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  } catch (err) {
    throw new Error("데이터를 가져오는데 실패 했습니다.2");
  }
}
