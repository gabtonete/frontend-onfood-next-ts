
import { useRouter } from "next/router";
import { PageTemplate, DisheList } from "@/components";
import Styles from "../../styles/discovery.module.css";

export default function Descobrir() {
  const router = useRouter();
  var city = router.query.city;
  if (city === "sao-paulo-sp") {
    city = "São Paulo, SP"
  } else if (city === "porto-alegre-rs") {
    city = "Porto Alegre, RS"
  } else {
    city = "Florianópolis, SC"
  }

  return (
    <PageTemplate>
      <div className={Styles.content}>
        <h1>Opções na região de {city}</h1>
        <p>Encontramos 6 opções</p>
        <div className={Styles.items}>
          <DisheList />
        </div>
      </div>
    </PageTemplate>
  );
}