import { MapPin, Phone, Truck, Store, Calculator } from "lucide-react";
import { STORE } from "../data/grilyato";

export function LogoMark({
  height = 44,
  lettersColor = "#FFFFFF",
  proColor = "#FFCB05",
  className,
}: {
  height?: number;
  lettersColor?: string;
  proColor?: string;
  className?: string;
}) {
  return (
    <svg
      height={height}
      width={(height * 72) / 56}
      viewBox="0 0 72 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Лемана ПРО"
      style={
        {
          "--logo-pro-letters-color": proColor,
          "--logo-lemana-letters-color": lettersColor,
          "--logo-right-form-color": "#FFCB05",
          "--logo-left-form-color": "#FFCB05",
          "--logo-angles-form-color": "#F0B600",
        } as React.CSSProperties
      }
    >
      <path d="M36.8482 45.0031H31.7582L35.1373 48.3329H36.8482C37.3302 48.3329 37.7221 48.725 37.7221 49.2068C37.7221 49.6886 37.33 50.0801 36.8482 50.0801H35.1373V48.3329H31.814V55.0005H35.1373V53.4036H36.8482C39.163 53.4036 41.0458 51.5209 41.0458 49.2068C41.0458 46.8928 39.163 45.0031 36.8482 45.0031ZM47.3181 44.78C44.3547 44.78 41.9431 47.1916 41.9431 50.155C41.9431 53.1184 44.3547 55.53 47.3181 55.53C50.2814 55.53 52.6931 53.1184 52.6931 50.155C52.6931 47.1916 50.2814 44.78 47.3181 44.78ZM47.3181 52.2063C46.1853 52.2063 45.2667 51.2845 45.2667 50.155C45.2667 49.0255 46.1853 48.1037 47.3181 48.1037C48.4508 48.1037 49.3694 49.0255 49.3694 50.155C49.3694 51.2845 48.4508 52.2063 47.3181 52.2063ZM30.0416 45.0031V55.0005H26.7208V47.803H23.3208V55.0005H20V45.0031H30.0416Z" fill="var(--logo-pro-letters-color)" />
      <path d="M59.3674 32.0045V42.0023H55.9196V38.2736H52.6114V42.0023H49.1616V32.0045H52.6114V35.4502H55.9196V32.0045H59.3674ZM3.47468 32.0037L3.34384 35.945C3.32572 36.5751 3.28345 37.1508 3.21904 37.656C3.15462 38.1492 3.03787 38.5437 2.86879 38.8295C2.65944 39.1818 2.31121 39.2945 1.80395 39.1858L1.5 39.1214V41.9757L1.58656 41.9979C1.85226 42.0643 2.1079 42.1106 2.34543 42.1408C2.58094 42.169 2.8084 42.1831 3.01775 42.1831C3.71019 42.1831 4.2879 42.0241 4.73074 41.7141C5.17158 41.4041 5.51579 41.0116 5.75734 40.4379C5.99486 39.8743 6.16395 39.1939 6.26258 38.4149C6.36121 37.6419 6.42563 36.7703 6.45381 35.8263L6.484 34.7936H8.51102V41.9999H11.9853V32.0037H3.47468ZM16.952 39.2965V38.1536H21.6174V35.7103H16.952V34.7071H22.1896V32.0045H13.4972V41.9991H22.3712V39.2965H16.952ZM33.0419 32.0043L30.0564 35.3506L27.0708 32.0043H23.4282V42.0001H26.8808V37.2701H26.9033L26.913 37.2798L30.0467 40.3555L33.2191 37.2379L33.2223 37.2444V37.2862L33.232 42.0001H36.6813V32.0043H33.0419ZM60.5252 36.7291V42.0001H63.8135V36.7291C63.8135 35.8047 64.5833 35.0511 65.5076 35.0511C66.4319 35.0511 67.1888 35.8047 67.1888 36.7291V38.6872H63.8522L67.1179 42.0001H70.5061V36.7291C70.5061 33.9754 68.2613 31.737 65.5076 31.737C62.7571 31.737 60.5252 33.9754 60.5252 36.7291ZM42.8392 31.737C40.0856 31.737 37.8407 33.9754 37.8407 36.7291V42.0001H41.2289L44.4947 38.6872H41.158V36.7291C41.158 35.8047 41.9117 35.0511 42.8392 35.0511C43.7668 35.0511 44.5333 35.8047 44.5333 36.7291V42.0001H47.8216V36.7291C47.8216 33.9754 45.5897 31.737 42.8392 31.737Z" fill="var(--logo-lemana-letters-color)" />
      <path d="M41.1247 5.17859L36.9501 11.19L40.7269 14.9211V20.7547H32.6301L31.2715 26.9992H48V11.9766L41.1247 5.17859Z" fill="var(--logo-right-form-color)" />
      <path d="M31.2715 20.7534V26.9979L32.6304 20.7534H31.2715Z" fill="var(--logo-angles-form-color)" />
      <path d="M35.9991 10.2466L41.1246 5.17859L36.9485 11.1853L35.9991 10.2466Z" fill="var(--logo-angles-form-color)" />
      <path d="M36.0009 0.109989L24 11.976V26.9984H31.2733V20.7539V14.9202L36.0009 10.2457L41.1263 5.17796L36.0009 0.109989Z" fill="var(--logo-left-form-color)" />
    </svg>
  );
}

const TICKER_ITEMS = [
  "Лемана Про Челябинск — Калькулятор Грильято",
  "Точная смета за 1 минуту",
  "Доставка от 3х дней",
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* utility bar */}
      <div className="hidden md:block bg-ink text-white/70">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 h-9 flex items-center justify-between text-[12.5px]">
          <nav className="flex items-center gap-5">
            <a href="#features" className="hover:text-pro transition-colors">О системе Грильято</a>
          </nav>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Store size={13} strokeWidth={2.2} className="text-pro" /> {STORE.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Truck size={13} strokeWidth={2.2} className="text-pro" /> Доставка и подъём
            </span>
          </div>
        </div>
      </div>

      {/* main masthead */}
      <div className="bg-graphite text-white shadow-[0_8px_30px_rgba(20,25,27,0.25)]">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8 h-[68px] flex items-center gap-3 lg:gap-5">
          <a href="#top" className="flex items-center shrink-0 group" aria-label="Лемана ПРО — на главную">
            <LogoMark height={46} className="transition-transform group-hover:scale-105" />
          </a>

          <div className="flex-1" />

          <button className="hidden sm:flex items-center gap-1 text-[13.5px] font-semibold text-white/85 hover:text-pro transition-colors">
            <MapPin size={16} strokeWidth={2.3} className="text-pro" />
            {STORE.city}
          </button>

          <a href={STORE.phoneHref} className="hidden xl:flex items-center gap-2.5 group">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-pro group-hover:text-graphite transition-colors">
              <Phone size={16} strokeWidth={2.3} />
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-bold">{STORE.phone}</span>
              <span className="block text-[11.5px] text-white/50">позвонить в магазин</span>
            </span>
          </a>

        </div>
      </div>

      {/* yellow title ticker */}
      <div className="bg-pro text-graphite overflow-hidden border-b border-graphite/10">
        <div className="animate-ticker flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
              {TICKER_ITEMS.map((t, i) => (
                <span key={i} className="flex items-center gap-3 px-6 py-2 text-[13px] font-bold tracking-wide whitespace-nowrap">
                  {i === 0 ? <Calculator size={14} strokeWidth={2.6} /> : <span className="w-1.5 h-1.5 rounded-full bg-graphite/70" />}
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
