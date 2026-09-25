# AGENTS.md

Estas reglas son obligatorias para cualquier agente que trabaje en este repositorio.

## Rama y estado del repositorio

- Trabaja directamente sobre `main`.
- Antes de empezar, comprueba la rama actual, el estado del árbol y los últimos commits.
- Si no estás en `main`, detente y pide instrucciones. No cambies de rama automáticamente.
- Si hay cambios locales que no has creado tú, no los reviertas ni los sobrescribas. Detente si interfieren con el trabajo y pide aclaración.
- Mantén `main` siempre desplegable.
- No uses comandos destructivos como `git reset --hard` o `git checkout --`.
- No hagas `push` a `main` hasta haber ejecutado las comprobaciones locales relevantes y confirmado que el cambio funciona.

## Antes de implementar

- Inspecciona primero el stack, la arquitectura, las convenciones y el código afectado.
- Define el alcance y los criterios de aceptación antes de editar.
- Si falta contexto, hay varias interpretaciones razonables o el cambio puede afectar producción, detente y pide aclaración. No asumas.
- No modifiques páginas, módulos o configuraciones fuera del alcance solicitado.
- No añadas dependencias externas sin una necesidad explícita y justificada.

## Implementación

- Haz cambios pequeños, enfocados y reversibles.
- Conserva las convenciones existentes de nombres, estructura y herramientas.
- No dupliques lógica de negocio, acceso a datos o selección de recursos cuando pueda compartirse de forma clara.
- Mantén los cambios experimentales detrás de una feature flag cuando deban convivir con la implementación estable.
- Las feature flags deben estar desactivadas por defecto.
- Una feature flag es un mecanismo de experimentación, no de autorización ni de seguridad.
- No añadas controles visibles, textos, metadata ni elementos de navegación para una flag que deba ser invisible para visitantes.
- Elimina la flag y el camino antiguo cuando la funcionalidad experimental pase a ser la implementación estable, salvo que exista una razón documentada para conservarlos.

## Verificación local

- Ejecuta las comprobaciones apropiadas para el cambio: lint, tipos, tests, build y, cuando corresponda, una verificación funcional.
- Verifica explícitamente los caminos estable y experimental cuando haya una feature flag.
- No consideres validado un cambio solo porque no haya errores evidentes durante la edición.
- Si una comprobación no puede ejecutarse, documenta el comando, el motivo y el impacto en la confianza de la validación.

## Commits

- Cada commit debe ser pequeño, atómico y representar un único cambio lógico.
- No mezcles refactors no relacionados, formateo masivo o cambios de dependencias con la funcionalidad en curso.
- Usa mensajes de commit Conventional Commits, por ejemplo: `feat(projects): add browser-controlled experiment flag`.
- Revisa `git status`, `git diff` y el historial reciente antes de crear un commit.
- No incluyas secretos, artefactos generados ni cambios ajenos al trabajo.

## Push y pipeline CI/CD

La validación del pipeline forma parte de la definición de terminado. La secuencia obligatoria es:

```text
implement
-> local checks
-> atomic commit
-> push to main
-> observe pipeline
-> verify successful pipeline
-> task done
```

Después de cada `push` a `main`:

1. Identifica el pipeline correspondiente al commit que acabas de enviar.
2. Usa el pipeline observer disponible en el entorno para consultar su estado.
3. Espera a que termine cuando sea necesario.
4. Comprueba que las etapas relevantes han finalizado correctamente.
5. Si falla, inspecciona el resultado y determina si el fallo está relacionado con el cambio.
6. Corrige los problemas que sean responsabilidad del agente.
7. Repite la validación local, haz un commit atómico adicional si procede y vuelve a comprobar el pipeline.
8. No des por terminada la tarea mientras el pipeline correspondiente siga fallando, salvo que el fallo sea claramente ajeno al cambio y quede documentado.

La ausencia de errores locales no equivale a una validación de CI/CD completada. Si el pipeline observer no está disponible, falla o no permite determinar el estado del pipeline, indícalo explícitamente y no afirmes que la validación CI/CD se ha completado.

## Definición de terminado

Un cambio solo está terminado cuando:

- cumple el alcance y los criterios de aceptación;
- los caminos afectados han sido verificados localmente;
- existe un commit atómico si el trabajo autorizado incluye commit;
- el cambio enviado a `main` tiene un pipeline identificado y correctamente procesado;
- cualquier fallo externo, limitación o validación pendiente está documentado;
- no quedan cambios accidentales o artefactos sin explicar en el árbol de trabajo.
