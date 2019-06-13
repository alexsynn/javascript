var user = { firstName: "Вася" };
var admin = { firstName: "Админ" };

function func() {
    console.log( this.firstName );
}

user.f = func;
admin.g = func;

// this равен объекту перед точкой:
user.f(); // Вася
admin.g(); // Админ
admin['g'](); // Админ (не важно, доступ к объекту через точку или квадратные скобки)