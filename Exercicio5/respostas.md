1. Qual a principal imagem relacionada ao princípio e qual a explicação sobre ela?

R= A imagem principal ligada ao Princípio da Segregação de Interfaces (ISP) é a ideia de ter várias interfaces menores e coesas, cada uma com um conjunto específico de métodos relacionados. Isso é representado visualmente por várias interfaces pequenas, em vez de uma única grande.

2. Por que devemos segregar implementações através do uso de interfaces?

R= A segregação de implementações usando interfaces evita que as classes dependam de funcionalidades que não precisam. Isso permite que as classes usem apenas as interfaces relevantes, evitando dependências desnecessárias.

3. Podemos dizer que esse princípio é correlato ao Single Responsability Principle
pelo fato de que classes e interfaces devem ter um único “foco” (SRP) e que as
interfaces com métodos não correlatos devem ser segregadas (ISP)?

R= O ISP e o SRP estão relacionados, ambos visam a coesão e o foco. Enquanto o SRP se aplica a classes, o ISP trata de interfaces, mas ambos buscam garantir que unidades (sejam classes ou interfaces) tenham um único propósito ou responsabilidade.

4. Comente as seguintes frases à luz do ISP:
a. “Nenhum cliente deve ser forçado a depender de métodos que ele não
usa”;

R= Alinha-se com o ISP, evitando que classes dependam de funcionalidades não necessárias.

b. “Classes não devem ser forçadas a implementar interfaces que não usam”;

R= Em sintonia com o ISP, evita obrigar classes a ter métodos não relevantes para elas.

5. Qual a principal imagem relacionada ao princípio e qual a explicação sobre ela?

R=A imagem chave do DIP é uma seta para cima, simbolizando que módulos superiores não dependem diretamente dos inferiores, mas ambos dependem de abstrações. Isso indica que a dependência é direcionada para interfaces abstratas, não para implementações concretas.

6. O que você entende por programar para Interfaces?

R= Programar para Interfaces implica que classes e módulos devem depender de abstrações ou interfaces, não de implementações concretas. Isso oferece flexibilidade, permitindo a troca de implementações sem impactar o restante do código, desde que sigam a mesma interface.

7. Cite um exemplo em que uma mudança em uma dependência, por exemplo, banco
de dados, ou mecanismo de autenticação ou conexão via sockets poderia impactar
uma implementação de outros módulos.

R= Se os módulos dependessem de uma interface abstrata para se comunicar com o banco de dados em vez de uma implementação específica (como MySQL), a troca para outro banco (por exemplo, PostgreSQL) seria menos disruptiva. As mudanças seriam focadas na implementação da interface, não nos módulos que a utilizam, reduzindo o impacto da transição.

8. Estude o conteúdo do link abaixo e explique como o DIP se aplicaria:

R=O padrão Repository no Symfony isola o acesso aos dados, separando a lógica de negócios da manipulação de dados. Isso evita que as classes de negócio lidem diretamente com o banco de dados, facilitando os testes e permitindo a reutilização de métodos de busca, salvamento, entre outros. Em comparação com frameworks como CakePHP 2 ou Laravel 4, esse padrão promove uma melhor separação de responsabilidades e adere aos princípios de design SOLID, especialmente ao Princípio da Inversão de Dependência (DIP), resultando em maior flexibilidade, testabilidade e manutenção do código.

9. Você acha que esse princípio deveria ser um dos primeiros em um eventual
“check-list” de princípios SOLID a aplicarmos?

R= Sim, o Princípio da Inversão de Dependência (DIP) é frequentemente considerado um dos princípios-chave no desenvolvimento de software e é recomendado como um dos primeiros a serem aplicados devido à sua capacidade de promover uma arquitetura mais flexível e extensível. Ele desempenha um papel crucial na redução do acoplamento e na promoção da reutilização de código.

10. Numa visão geral, considera que se começarmos pelos 4 primeiros princípios
SOLID, fatalmente o DIP já estaria implementado?

R= Em uma visão geral dos princípios SOLID, se os quatro primeiros princípios (SRP, OCP, LSP e ISP) forem aplicados corretamente, há uma alta probabilidade de o Princípio da Inversão de Dependência (DIP) estar naturalmente implementado. Isso ocorre porque a aplicação dos princípios anteriores geralmente leva a uma arquitetura que favorece a inversão de dependência, reduzindo o acoplamento entre os componentes do sistema e promovendo a injeção de dependência para facilitar a flexibilidade e a extensibilidade do código.






