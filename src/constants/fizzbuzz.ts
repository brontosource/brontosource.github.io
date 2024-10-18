export const CPPExmapleCode = `void fizzbuzz(int const range) noexcept {
    constexpr std::pair<int, char const*> pairs[] {
        {3, "Fizz"}, {5, "Buzz"}, {7, "Fuzz"}, {13, "Bizz"}
    };

    for (int i = 1; i < range; ++i) {
        bool none = true;
        for (auto const& [num, str] : pairs) {
            if (i % num == 0) {
                std::printf("%s", str);
                none = false;
            } 
        }

        if (none) {
            std::printf("%d", i); 
        }
        std::putchar('\\n');
    }
 }`;

export const RustExampleCode = `pub fn fizz_buzz(n: i32) -> Vec<String> {
    let mut result = Vec::new();

    for i in 1..=n {
        if i % 3 == 0 && i % 5 == 0 {
            result.push("FizzBuzz".to_string());
        } else if i % 3 == 0 {
            result.push("Fizz".to_string());
        } else if i % 5 == 0 {
            result.push("Buzz".to_string());
        } else {
            result.push(i.to_string());
        }
    }

    result
 }`;
