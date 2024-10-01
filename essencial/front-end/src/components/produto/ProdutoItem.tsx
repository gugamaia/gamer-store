import Produto from "@/core/produto/Produto"

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: any) {
    return <div>props.produto.nome</div>
}
