export function SmallHead({head,line}) {
    return (
      <>
        <div style={{ width: "89%", margin: "auto" }}>
          <h1 style={{ paddingTop: "20px", fontSize: "24px", fontWeight: "700" }}>
            {head}
          </h1>
          <p style={{ paddingBottom: "10px", color: "gray" }}>{line}</p>
        </div>
      </>
    );
  }