import { FunctionComponent } from "react";
import styles from "./K10.module.css";
import Sidebar from "./Sidebar/Sidebar"
import Frame1 from "./Frame1/Frame";
import Frame2 from "./Frame2/Frame2";
import Frame3 from "./Frame3/Frame3";

const K10: FunctionComponent = () => {
  return (
    <div className={styles.k10}>
      <Sidebar />
      <div className={styles.headingParent}>
        <div className={styles.heading}>
          <b className={styles.b1}>メディア一覧</b>
        </div>
        <div className={styles.frameParent2}>
          <Frame1 />
          <div className={styles.group}>
            <div className={styles.div9}>絞り込み検索</div>
            <img className={styles.menufilledIcon} alt="" src="/icon10.svg" />
          </div>
          <button className={styles.buttonoutlined7}>
            <div className={styles.unstyledbutton5}>
              <button className={styles.content5}>
                <div className={styles.button6}>メディアを比較</div>
                <img
                  className={styles.maskedicon}
                  alt=""
                  src="/masked-icon.svg"
                />
              </button>
            </div>
          </button>
          <div className={styles.frameParent13}>
            <Frame2 />
            <Frame3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default K10;
