import Link from "next/link";
import styles from "./donate-panel.module.css";
import { HTMLAttributes } from "react";

interface DonatePanelProps extends HTMLAttributes<HTMLDivElement> {
  colour?: "blue" | "darkBlue";
}


const DonatePanel = ({ colour="blue" } : DonatePanelProps) => {
  return (
    <section className={`${styles.donate} ${styles[colour]}`}>
      <div className={styles.inner}>
        <h2>Donate now to help bring a struggling patient some dignity</h2>
        <Link href="/get-involved">Donate Now</Link>
      </div>

      <svg
        width="579"
        height="219"
        viewBox="0 0 579 219"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.art}
      >
        <path
          d="M167.403 -41.8926L238.881 -29.4667L201.081 33.937L129.603 21.511L167.403 -41.8926Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M124.202 29.4785L195.68 41.9044L157.88 105.308L86.4022 92.8821L124.202 29.4785Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M81.0008 100.849L152.479 113.275L114.679 176.678L43.201 164.252L81.0008 100.849Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M37.7996 172.219L109.278 184.645L71.4779 248.048L-0.000150147 235.622L37.7996 172.219Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M255.776 -26.5293L327.254 -14.1034L289.454 49.3003L217.976 36.8743L255.776 -26.5293Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M212.574 44.8408L284.052 57.2667L246.252 120.67L174.774 108.244L212.574 44.8408Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M169.374 116.211L240.852 128.637L203.052 192.04L131.574 179.615L169.374 116.211Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M126.173 187.582L197.651 200.008L159.851 263.412L88.3729 250.986L126.173 187.582Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M344.149 -11.166L415.627 1.25989L377.828 64.6635L306.349 52.2376L344.149 -11.166Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M300.947 60.2041L372.425 72.63L334.625 136.034L263.147 123.608L300.947 60.2041Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M257.746 131.574L329.224 144L291.424 207.404L219.946 194.978L257.746 131.574Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M214.546 202.944L286.024 215.37L248.224 278.774L176.746 266.348L214.546 202.944Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M432.522 4.19626L504 16.6222L466.201 80.0258L394.723 67.5999L432.522 4.19626Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M389.32 75.5673L460.798 87.9933L422.998 151.397L351.52 138.971L389.32 75.5673Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M346.12 146.936L417.598 159.362L379.798 222.766L308.32 210.34L346.12 146.936Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M302.918 218.308L374.396 230.734L336.596 294.137L265.118 281.711L302.918 218.308Z"
          fill="#4C7194"
          fillOpacity="0.5"
        />
        <path
          d="M242.403 -58.5147L313.881 -46.0887L276.081 17.3149L204.603 4.88897L242.403 -58.5147Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M199.202 12.8564L270.68 25.2823L232.88 88.686L161.402 76.2601L199.202 12.8564Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M156.001 84.2265L227.479 96.6525L189.679 160.056L118.201 147.63L156.001 84.2265Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M112.8 155.597L184.278 168.023L146.478 231.426L74.9998 219L112.8 155.597Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M330.776 -43.1514L402.254 -30.7255L364.454 32.6782L292.976 20.2523L330.776 -43.1514Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M287.574 28.2187L359.052 40.6447L321.252 104.048L249.774 91.6224L287.574 28.2187Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M244.374 99.5888L315.852 112.015L278.052 175.418L206.574 162.992L244.374 99.5888Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M201.173 170.96L272.651 183.386L234.851 246.79L163.373 234.364L201.173 170.96Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M419.149 -27.7881L490.627 -15.3622L452.828 48.0415L381.349 35.6155L419.149 -27.7881Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M375.947 43.582L447.425 56.0079L409.625 119.412L338.147 106.986L375.947 43.582Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M332.746 114.952L404.224 127.378L366.424 190.782L294.946 178.356L332.746 114.952Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M289.546 186.322L361.024 198.748L323.224 262.152L251.746 249.726L289.546 186.322Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M507.522 -12.4258L579 0.000119533L541.201 63.4038L469.723 50.9778L507.522 -12.4258Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M464.32 58.9453L535.798 71.3712L497.998 134.775L426.52 122.349L464.32 58.9453Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M421.12 130.314L492.598 142.74L454.798 206.144L383.32 193.718L421.12 130.314Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
        <path
          d="M377.918 201.686L449.396 214.111L411.596 277.515L340.118 265.089L377.918 201.686Z"
          fill="#4C7194"
          fillOpacity="0.75"
        />
      </svg>
    </section>
  );
};
export default DonatePanel;
