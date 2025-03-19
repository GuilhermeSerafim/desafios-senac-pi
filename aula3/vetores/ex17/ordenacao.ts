// Entendendo mais sobre ordenação manual

let numeros = [5, 3, 8, 4, 2];

// Lista grande (> 1000 elementos) e precisa de simplicidade → Selection Sort ✅
function selectionSort(arr: number[]): number[] {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[menorIndex]) {
                menorIndex = j;
            }
        }

        // Troca os elementos
        [arr[i], arr[menorIndex]] = [arr[menorIndex], arr[i]];
    }

    return arr;
}

console.log(selectionSort(numeros)); // [2, 3, 4, 5, 8]

// Poucos elementos (≤ 1000) → Insertion Sort 
function insertionSort(arr: number[]): number[] {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let atual = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > atual) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = atual;
    }

    return arr;
}

console.log(insertionSort(numeros)); // [2, 3, 4, 5, 8]