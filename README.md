## Дополнительная информация по докладу Observability на Podlodka QA Crew #14

### 1. Придворный лекарь (метафора мониторинга)

![Придворный лекарь](img/img_1.jpg)

> **Мониторинг** — как придворный лекарь у императора:  
> Он следит за симптомами (метриками), но не всегда знает, откуда болезнь.

---

### 2. Красный дракон (метафора неожиданной проблемы)

![Красный дракон](img/img_2.jpg)

> **Observability** — как охота на красного дракона в тумане:  
> Нужно не только заметить его, но и понять, откуда он появился.

---

### 3. Makefile команды для демо

> 💡 Все команды выполняются из корня проекта.

#### 🔹 Инициализировать шаблон проекта Playwright
```bash
make install-playwright
```

#### 🔹 Установить allurectl
```bash
make install-allurectl
```

#### 🔹 Установить allure-playwright репортер
```bash
make install-playwright-allure
```

#### 🔹 Установить playtheus репортер
```bash
make install-playwright-playtheus
```

#### 🔹 Прогнать тесты
```bash
make test
```

#### 🔹 Сгенерировать отчет
```bash
make result-generate
```

#### 🔹 Отправить отчет
```bash
make result-send
```

#### 🔹 Поднять сервис Grafana + Prometheus
```bash
make docker-up
```

#### 🔹 Остановить сервис Grafana + Prometheus
```bash
make docker-down
```

---

### 4. Полезные заметки

- **Allure TestOps** — для визуализации и анализа тестов.
- **Prometheus** — для сбора и хранения метрик.
- **Grafana** — для построения графиков и дашбордов.
- **Monitoring** даёт сигнал, **Observability** помогает найти причину.