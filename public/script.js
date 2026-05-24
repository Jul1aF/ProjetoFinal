
const modal = document.getElementById('novo-card');
const btnAdicionar = document.querySelector('.btn-adicionar');
const btnFechar = document.querySelector('.fechar');
const formCard = document.getElementById('form-novo-card');


const colunaParaEstudar = document.querySelector('.coluna-kanban1'); 

//quando clica o popup abre
btnAdicionar.addEventListener('click', () => {
    modal.style.display = 'flex';
});

//quando clica ele fecha
btnFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});



formCard.addEventListener('submit', (evento) => {
    //valores do card
    const titulo = document.getElementById('titulo').value;
    const desc = document.getElementById('descricao').value;
    const tags = document.getElementById('tags').value.split(','); //separa por vírgula

    //monta as tags
    let tagsHtml = '';
    tags.forEach(tag => {
        if(tag.trim() !== '') {
            tagsHtml += `<span class="tag">${tag.trim()}</span>`;
        }
    });

    // Cria a estrutura HTML do novo card
    const novoCard = document.createElement('div');
    novoCard.className = 'card';
    novoCard.draggable = true;
    novoCard.innerHTML = `
        <div class="card-title">
            <h3>${titulo}</h3>
            <button class="close-btn">×</button>
        </div>
        <p>${desc}</p>
        <div class="card-tags">
            ${tagsHtml}
        </div>
    `;
    //regras para arrastar o card novo
    novoCard.addEventListener('dragstart', () => {
        novoCard.classList.add('dragging');
    });
    novoCard.addEventListener('dragend', () => {
        novoCard.classList.remove('dragging');
    });

    // Joga o novo card dentro da primeira coluna
    colunaParaEstudar.appendChild(novoCard);

    //excluir o preenchimento e esconde o modal
    formCard.reset();
    modal.style.display = 'none';
});