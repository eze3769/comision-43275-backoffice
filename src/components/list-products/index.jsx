import React from 'react'
import { addDoc, collection, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import Item from '../item-card';

const ListProducts = () => {
    const [productos, setProductos] = React.useState([]);

    React.useEffect(() => {
        const db = getFirestore();

        const products = collection(db, 'productos');

        getDocs(products)
        .then((snapshot) => {
            const items = snapshot.docs.map((doc) => {
                return({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setProductos(items);
        })

    }, [])

    const onClick = (producto, id) => {
        const db = getFirestore();


        const document = doc(db, 'productos', id);

        updateDoc(document, producto)
        .then((snapshot) => {
            alert('se modifico el producto id: ' + snapshot?.doc?.id)
        })
    }

    const handleCreate = (producto) => {
        const db = getFirestore();

        const productos = collection(db, 'productos');

        addDoc(productos, producto)
        .then((snapshot) => {
            alert('se creó el producto id: ' + snapshot?.id)
        })
    }
  return (
    <div>
        {
            !productos.length ?
            <p>No hay productos cargados</p>
            :
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                <h2>Productos cargados</h2>
                {
                    productos.map(producto => {
                        return (
                            <Item key={producto.id} data={producto} onClick={onClick} />
                        )
                    })
                }
                  <Item onClick={handleCreate} data = {{id:'', title: '', imageURL: '', stock: 0, price: 0}} />
            </div>
        }
    </div>
  )
}

export default ListProducts;