import { FunctionComponent } from "react";
import styles from "../K10.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <>
      <form className={styles.frameForm}>
        <div className={styles.frameParent3}>
          {/* Section for Genre */}

          <div className={styles.frameParent4}>
            {/* Genre Label */}
            <div className={styles.wrapper}>
              <b className={styles.b2}>ジャンル</b>
            </div>
            {/* Button to select Genre */}
            <div className={styles.buttonoutlinedWrapper}>
              <button className={styles.buttonoutlined}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.content}>
                    <img
                      className={styles.maskedicon}
                      alt=""
                      src="/maskedicon.svg"
                    />
                    <div className={styles.button}>ターゲットを選ぶ</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Section for Media Type */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper}>
              <b className={styles.b3}>メディア種別</b>
            </div>
            {/* Button to select Media Type */}
            <div className={styles.buttonoutlinedContainer}>
              <button className={styles.buttonoutlined}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.content}>
                    <img
                      className={styles.maskedicon}
                      alt=""
                      src="/maskedicon.svg"
                    />
                    <div className={styles.button}>メディア種別を選ぶ</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Target Funnel Section */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper}>
              <b className={styles.b3}>対応ファネル</b>
            </div>
            <div className={styles.chips1InputbTextOnlyAParent}>
              {/* Buttons for different target funnel options */}
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img className={styles.maskedicon} alt="" src="/avatar.svg" />
                </div>
                <label className={styles.label}>
                  <div className={styles.label1}>認知</div>
                </label>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar1.svg"
                  />
                </div>
                <label className={styles.label}>
                  <div className={styles.label1}>興味</div>
                </label>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar2.svg"
                  />
                </div>
                <label className={styles.label}>
                  <div className={styles.label1}>理解</div>
                </label>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar3.svg"
                  />
                </div>
                <label className={styles.label}>
                  <div className={styles.label1}>購買 / 来店促進</div>
                </label>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar4.svg"
                  />
                </div>
                <div className={styles.label8}>
                  <div className={styles.label1}>リピート</div>
                </div>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar5.svg"
                  />
                </div>
                <label className={styles.label}>
                  <div className={styles.label1}>推奨</div>
                </label>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
            </div>
          </div>

          {/* Target Section */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper}>
              <b className={styles.b3}>ターゲット</b>
            </div>
            <div className={styles.buttonoutlinedFrame}>
              <button className={styles.buttonoutlined}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.content}>
                    <img
                      className={styles.maskedicon}
                      alt=""
                      src="/maskedicon.svg"
                    />
                    <div className={styles.button}>ターゲットを選ぶ</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Target Type Section */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper}>
              <b className={styles.b3}>ターゲット種別</b>
            </div>
            <div className={styles.chips1InputbTextOnlyAParent}>
              {/* Buttons for different target type options */}
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar6.svg"
                  />
                </div>
                <div className={styles.label8}>
                  <div className={styles.label1}>toC</div>
                </div>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar7.svg"
                  />
                </div>
                <div className={styles.label8}>
                  <div className={styles.label1}>toB</div>
                </div>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
              <button className={styles.chips1InputbTextOnlyA}>
                <div className={styles.avatar}>
                  <img
                    className={styles.maskedicon}
                    alt=""
                    src="/avatar8.svg"
                  />
                </div>
                <label className={styles.label}>
                  <div className={styles.label1}>両方</div>
                </label>
                <div className={styles.icon18}>
                  <img className={styles.icon19} alt="" src="/-icon.svg" />
                </div>
              </button>
            </div>
          </div>

          {/* Demographic Section */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper}>
              <b className={styles.b3}>デモグラ</b>
            </div>
            <div className={styles.buttonoutlinedWrapper1}>
              <button className={styles.buttonoutlined}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.content}>
                    <img
                      className={styles.maskedicon}
                      alt=""
                      src="/maskedicon.svg"
                    />
                    <div className={styles.button}>デモグラを選ぶ</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Main Advertiser Industry Section */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper}>
              <b className={styles.b2}>主要広告主の業種/商材</b>
            </div>
            <div className={styles.buttonoutlinedFrame}>
              <div className={styles.buttonoutlined4}>
                <div className={styles.unstyledbutton}>
                  <div className={styles.content}>
                    <img
                      className={styles.maskedicon}
                      alt=""
                      src="/maskedicon.svg"
                    />
                    <div className={styles.button}>
                      主要広告主の業種/商材を選ぶ
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Minimum Cost Perception Section */}
          <div className={styles.frameParent5}>
            <div className={styles.wrapper5}>
              <b className={styles.b3}>下限費用感</b>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.textFieldoutlinedParent}>
                <div className={styles.textFieldoutlined}>
                  <div className={styles.input}>
                    <div className={styles.container1}>
                      <div className={styles.label18}>選択してください</div>
                    </div>
                  </div>
                </div>
                <div className={styles.arrowdropdownfilled}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Free Word Section */}
          <div className={styles.frameParent12}>
            <div className={styles.wrapper5}>
              <b className={styles.b3}>フリーワード</b>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.textFieldoutlined1}>
                <input className={styles.input1} type="text" />
              </div>
            </div>
          </div>
        </div>

        {/* Search Buttons */}
        <div className={styles.frame1}>
          {/* Button to clear search criteria */}
          <button className={styles.buttonoutlined5}>
            <div className={styles.unstyledbutton5}>
              <div className={styles.button5}>検索条件をクリア</div>
            </div>
          </button>
          {/* Button to initiate the search */}
          <button className={styles.buttonoutlined6}>
            <div className={styles.unstyledbutton5}>
              <div className={styles.button6}>検索する</div>
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default Frame1;
