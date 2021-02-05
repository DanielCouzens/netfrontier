import React, { useState, useEffect } from 'react'

const info = () => {
  const [showInfo, setShowInfo] = useState(true)

  React.useEffect(() => {
    return () => {
      console.log('render')
    }
  }, [])

  return (
    <div className="info-wrap">
      <div className="content-black"></div>
      <div onClick={() => setShowInfo(!showInfo)} className="button-content">
        +
      </div>

      <div className="content-about-shelf">
        <div className="background-light">
          {/* <img src={backlight} alt="" /> */}
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          perferendis consequuntur eos, voluptatibus molestiae assumenda at
          ipsam omnis quos iste eius illo deleniti deserunt non vero ipsum id
        </p>

        <p>
          aut rem! Doloremque asperiores enim aliquid, eum omnis ratione eos
          laboriosam iusto! In ipsum, adipisci a possimus ea repudiandae ducimus
          illo quod saepe, delectus laudantium earum placeat, maxime aliquid
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          molestiae saepe fugiat id neque voluptatibus et corporis beatae
          distinctio blanditiis consectetur cumque nesciunt reiciendis minus
          commodi necessitatibus vero? Minus excepturi blanditiis enim incidunt
          sequi rem? Autem unde voluptatum nesciunt placeat ducimus vero quidem
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>
        <p>
          ipsam accusamus minus. Sunt cumque at eaque aperiam, asperiores dicta
          ducimus iste sapiente facilis veritatis, voluptatem nesciunt deserunt
          totam. Reiciendis laborum molestiae dolor maiores! Aliquid dicta illo
          quaerat hic eligendi facilis veritatis vero! Repellendus obcaecati
          optio molestiae. Qui vero fugit repellat ex doloremque? Error id ullam
          tempora explicabo fugit. Incidunt ab delectus ea ducimus aperiam
          voluptates perspiciatis illo? Consequuntur quis tenetur nemo quaerat?
          Possimus doloribus veritatis fugit obcaecati! Hic adipisci
          reprehenderit excepturi, ratione a, unde assumenda consequatur nisi,
          delectus harum ab debitis dolorem. Deleniti eos eligendi aut libero
          sit iste ea recusandae iure! Assumenda quisquam maxime, molestias
        </p>

        {/* <button onClick={handleClick()}></button> */}
      </div>
    </div>
  )
}

export default info
