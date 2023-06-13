import { Itarefa } from '../../../types/tarefa';
import style from './Item.module.scss';

interface Props extends Itarefa{
    selecionaTrefa: (tarefaselecionada: Itarefa) => void
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTrefa
    }: Props) {
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
        onClick={() => !completado && selecionaTrefa(
            {
                tarefa,
                tempo,
                selecionado,
                completado,
                id
            }
        )}>
          <h3>{tarefa}</h3>
          <span>{tempo}</span>
          {completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
    </li>
    )
}