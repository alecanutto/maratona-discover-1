const Modal = {
    open() {
        // Abrir modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active');
    },
    close() {
        //Fechar modal
        // Remover a class active do modal
        document.querySelector('.modal-overlay').classList.remove('active');
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -16000,
        data: '10/01/2021'
    },
    {
        id: 2,
        description: 'Água',
        amount: -5400,
        data: '08/01/2021'
    },
    {
        id: 3,
        description: 'Criação Website',
        amount: 500000,
        data: '04/02/2021'
    },
    {
        id: 4,
        description: 'Internet',
        amount: 20000,
        data: '15/01/2021'
    }
];

const Transaction = {
    incomes() {
        // somar as entradas
    },
    expenses() {
        // somar as saídas
    },
    total() {
        // cálcular entradas - saídas
    }
}

const DOM = {
    innerHTMLTransaction() {
        const htmlTableRows = `
        <tr>
        <td class="description">Criação website</td>
        <td class="income">R$ 5000,00</td>
        <td class="date">04/02/2021</td>
        <td><img src="./assets/minus.svg" alt="Remover transação"></td>
        </tr>
        `
    }
}