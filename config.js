module.exports = {
    /*
    * Открываем доступ до веб интерфейса: Настройки программы (Ctrl+P) -> Дополнительно -> Веб интерфейс.
    * Ставим галку "Использовать веб-интерфейс".
    * Придумываем логин и пароль (без спецсимволов или экранируем их), при желании ставим галку "Альтернативный порт" и указываем другой порт.
    * Заполняем поля ниже.
    * */
    username: 'admin',
    password: 'admin',
    port: 8080,

    // Это интервал в миллисекундах с которым программа будет получать список IP адресов и блокировать их. 10000 миллисекунд = 10 секунд.
    interval: 10000,

    // Это фильтр версии, менять только при необходимости.
    filters: {
        mu: {major: 3, minor: 5},
        bit: {major: 7, minor: 10},
        muMac: { major: 0, minor: 0 }
    },

    /*
    * Выбор способа блокировки:
    * 0 - Через ipfilter.dat
    * 1 - Через firewall (устаревший способ)
    * */
    blockMethod: 0,

    /*
    * Расположение торрент клиента. На текущий момент только для работы с ipfilter.dat
    * Указывать если программа сама не смогла правильно определить директорию расположения клиента.
    * При указании пути необходимо экранировать обратные слэши, например: 'C:\\Users\\Administrator\\AppData\\Roaming\\uTorrent\\uTorrent.exe'
    * */
    dir: '',

    /*
    * Очищать ipfilter.dat при запуске.
    * true - удалять историю.
    * false - только дописывать новые IP.
    * */
    flagClearIpFilter: true,

    /*
    * Выводить больше логов, нужно для поиска ошибок
    * true - включен
    * false - выключен
    * */
    debugLog: false,
}
