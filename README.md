# Neste projeto:

- Primeiro curso:

  - Angular parte 1: Fundamentos
  - https://cursos.alura.com.br/course/angular-fundamentos

- Segundo curso:

  - Angular parte 2: Autenticação, Forms e lazy loading
  - https://cursos.alura.com.br/course/angular-autenticacao

# AlurapicRequisitoFormacaoAngularAlura

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Comandos utilizados

npm install bootstrap

ng g c photos/photos-list

ng g c photos/photos-form

ng g m errors

ng g c errors/not-found

ng g c photos/photo-list/photos

ng g c photos/photo-list/load-button

npm i font-awesome

## Anotações

- Um feature module é um módulo que dentro dele tem um monte de conteúdo que fazem sentido serem agrupados juntos.
- Há uma convenção em relação a organização dos `imports` no angular, onde primeiro vem os `imports` que o próprio angular faz e na sequência (separado por um enter) vem os `imports` que nós importamos, ou seja, pode ser componentes, services, etc.
- A opção `Rename Symbol` do VSCode (clicando com o direito em uma variável) faz com que seja possível editar e alterar aquela determinada variável em todos os lugares que a mesma foi chamada;
- Na convenção o método `ngOnInit` fica depois do `constructor`;
- Na convenção (acho que essa é do curso só) o `constructor` é destinado a injeção de dependências e qualquer inicialização posterior tem que ser feita no `ngOnInit`;
- O `ngOnChanges` recebe um parâmetro do tipo `SimpleChanges` e dentro desse método pode-se verificar se alguma propriedade teve alterações, teve mudanças, basta testar `changes.photos` (exemplo da propriedade photos);
- O pattern `debounce` em um filtro, pega a palavra que o usuário digitou em um determinado tempo de pausa, exemplo, usuário digitou e parou 300 milissegundos, a partir dai ele ira pegar a palavra digitada, isso é uma estratégia de performance;
- O `rxjs` possui diversos operadores chamados `Lettable Operators` e que podem ser utilizados para as mais diversas finalidades a fim de facilitar diversas operações e funcionalidades, um dos utilizados aqui foi o `debounceTime`;
- Toda vez que tem algo que fica emitindo valores e nunca termina (tipo um `Observable` sem o `.complete()`), o `ngOnDestroy` pode ser uma solução, exemplo utilizado no arquivo `photo-list.component.ts`, o `ngOnDestroy` é o fim do ciclo de vida de um componente, ou seja, caso ta na pagina A e navega para B, em teoria a A teria que ser destruída;
- Uma diretiva (exemplo aqui é da `darken-on-hover.directive.ts`) é utilizada passando o seu selector na tag, ou seja `<a apDarkenOnHover>oi</a>` e as também pode receber propriedades, que serão passadas assim: `<a apDarkenOnHover brightness="70%">oi</a>`;
- Você só coloca no `exports` (no módulo) aquilo que você quer ter acesso no template de outro componente;
- Esse pedaço de código equivale a um if, `this.platformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();` que testa se o `isPlatformBrowser()` é verdadeiro, se for, o código executará o que está a sequência dos e's comerciais, se não, não executa o que está na sequência dos &&. Esse código em específico (junto do seu service, `platform-detector.service.ts`) faz com que determinado código seja executado somente se o mesmo estiver rodando em um navegador, nunca em um dispositivo móvel;

## Iniciando a API

- npm install
- npm start
