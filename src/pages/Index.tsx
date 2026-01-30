import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const workoutCategories = [
    { name: "Похудение", icon: "Flame", count: "45 тренировок" },
    { name: "Силовые", icon: "Dumbbell", count: "38 тренировок" },
    { name: "Мобильность", icon: "Activity", count: "52 тренировки" },
    { name: "Пресс", icon: "Wind", count: "28 тренировок" },
  ];

  const workoutVideos = [
    {
      title: "Интенсивное кардио",
      duration: "30 мин",
      level: "Средний",
      calories: "350 ккал",
      image: "https://cdn.poehali.dev/projects/212dee30-fd5b-4fea-9333-9e9d63e0d245/files/88a8f790-d211-4ba1-91a7-bd739abed67e.jpg"
    },
    {
      title: "Мобильность",
      duration: "20 мин",
      level: "Легкий",
      calories: "120 ккал",
      image: "https://cdn.poehali.dev/projects/212dee30-fd5b-4fea-9333-9e9d63e0d245/files/222e83a8-50ab-44ee-9a76-5df33c68c1bb.jpg"
    },
    {
      title: "Силовая тренировка",
      duration: "45 мин",
      level: "Продвинутый",
      calories: "420 ккал",
      image: "https://cdn.poehali.dev/projects/212dee30-fd5b-4fea-9333-9e9d63e0d245/files/88a8f790-d211-4ba1-91a7-bd739abed67e.jpg"
    },
    {
      title: "Пресс",
      duration: "15 мин",
      level: "Легкий",
      calories: "80 ккал",
      image: "https://cdn.poehali.dev/projects/212dee30-fd5b-4fea-9333-9e9d63e0d245/files/222e83a8-50ab-44ee-9a76-5df33c68c1bb.jpg"
    },
  ];

  const programs = [
    {
      title: "Похудение за 30 дней",
      description: "Комплексная программа для сжигания жира",
      weeks: 4,
      workouts: 24
    },
    {
      title: "Набор мышечной массы",
      description: "Силовые тренировки для роста мышц",
      weeks: 8,
      workouts: 48
    },
    {
      title: "Гибкость и здоровье",
      description: "Йога и растяжка для всего тела",
      weeks: 6,
      workouts: 36
    },
  ];

  const trainers = [
    {
      name: "Влад Евстифеев",
      specialty: "Функциональный тренинг",
      experience: "10 лет",
      image: "https://cdn.poehali.dev/projects/212dee30-fd5b-4fea-9333-9e9d63e0d245/files/838fdaf8-7045-4e1a-b1c2-1f4240501c1b.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Flame" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ЗалНаВыезде
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Главная</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors font-medium">Программы</a>
            <a href="#trainers" className="text-foreground hover:text-primary transition-colors font-medium">Персональное ведение</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Начать тренировку
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                Тренируйся дома
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Твоё тело —{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  твой спортзал
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Библиотека из 163+ видео-тренировок для дома. Персональные программы, профессиональные тренеры, результат с первой недели.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                  <Icon name="Play" className="mr-2" size={20} />
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Смотреть программы
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">163+</div>
                  <div className="text-sm text-muted-foreground">Видео тренировок</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">50K+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">4.9</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/212dee30-fd5b-4fea-9333-9e9d63e0d245/files/88a8f790-d211-4ba1-91a7-bd739abed67e.jpg"
                alt="Home workout"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="TrendingUp" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">2,450</div>
                    <div className="text-sm text-muted-foreground">ккал сожжено сегодня</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workouts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
              Категории тренировок
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выбери своё направление
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Разнообразные тренировки для любого уровня подготовки
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {workoutCategories.map((category, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={category.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8">Популярные тренировки</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workoutVideos.map((video, index) => (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={video.image}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <Badge className="bg-white/90 text-foreground hover:bg-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="Play" className="text-primary ml-1" size={28} />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Signal" size={16} />
                        <span>{video.level}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Flame" size={16} />
                        <span>{video.calories}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>



      <section id="trainers" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Персональное ведение
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Наши тренеры
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с многолетним опытом помогут достичь твоих целей
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {trainers.map((trainer, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{trainer.name}</h3>
                    <p className="text-white/90 mb-1">{trainer.specialty}</p>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Icon name="Award" size={16} />
                      <span>Опыт: {trainer.experience}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Button className="w-full" variant="outline">
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Начни тренироваться уже сегодня
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
              Попробовать бесплатно
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Flame" className="text-primary" size={28} />
                <span className="text-xl font-bold">ЗалНаВыезде</span>
              </div>
              <p className="text-background/70">
                Твой персональный путь к здоровью и красивому телу
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Тренировки</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Похудение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Силовые</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Пресс</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>&copy; 2026 ЗалНаВыезде. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;