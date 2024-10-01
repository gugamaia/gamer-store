import ProdutoItem from "@/components/produto/ProdutoItem";
import {produtos} from '@/core/constants/produto'

export default function Home() {
  const lista = produtos;
  return (
    <div>
      <ProdutoItem />
    </div>
  );
}
